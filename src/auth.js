import { ref } from 'vue';
export const isAuthenticated = ref(false);

// Token keys
const ACCESS_KEY = 'token';
const REFRESH_KEY = 'refresh_token';

// Get tokens
export function getAccessToken() {
	return localStorage.getItem(ACCESS_KEY);
}
export function getRefreshToken() {
	return localStorage.getItem(REFRESH_KEY);
}

// Set tokens
export function setTokens(access, refresh) {
	localStorage.setItem(ACCESS_KEY, access);
	localStorage.setItem(REFRESH_KEY, refresh);
	isAuthenticated.value = true;
}

// Remove tokens and logout
export function logout() {
	localStorage.removeItem(ACCESS_KEY);
	localStorage.removeItem(REFRESH_KEY);
	isAuthenticated.value = false;
	// Use router to redirect to login
	try {
		const router = useRouter();
		router.push('/auth/login');
	} catch (e) {
		window.location.href = '/auth/login';
	}
}

// Refresh access token
export async function refreshToken() {
	const refresh = getRefreshToken();
	if (!refresh) {
		logout();
		return null;
	}
	try {
		const res = await fetch('NightinGale.pythonanywhere.com/api/auth/token/refresh/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ refresh })
		});
		const data = await res.json();
		if (res.ok && data.access) {
			localStorage.setItem(ACCESS_KEY, data.access);
			isAuthenticated.value = true;
			return data.access;
		} else {
			logout();
			return null;
		}
	} catch (e) {
		logout();
		return null;
	}
}

// Check if access token is expired (simple check, not cryptographically secure)
export function isTokenExpired(token) {
	if (!token) return true;
	try {
		const payload = JSON.parse(atob(token.split('.')[1]));
		return payload.exp * 1000 < Date.now();
	} catch (e) {
		return true;
	}
}

// Check authentication status on app load
export function checkAuthOnLoad() {
	const token = getAccessToken();
	if (token && !isTokenExpired(token)) {
		isAuthenticated.value = true;
	} else {
		isAuthenticated.value = false;
	}
}
// Centralized API fetch helper with auto token refresh
export async function apiFetch(url, options = {}) {
	let access = getAccessToken();
	if (!access || isTokenExpired(access)) {
		access = await refreshToken();
		if (!access) throw new Error('Authentication required');
	}
	options.headers = {
		...(options.headers || {}),
		'Authorization': `Bearer ${access}`,
		'Content-Type': 'application/json',
	};
	let res = await fetch(url, options);
	if (res.status === 401) {
		// Try refresh once
		access = await refreshToken();
		if (access) {
			options.headers['Authorization'] = `Bearer ${access}`;
			res = await fetch(url, options);
		} else {
			logout();
			throw new Error('Session expired');
		}
	}
	return res;
}