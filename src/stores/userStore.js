import { ref } from 'vue'

// Shared reactive user state used by header, profile, and settings
export const currentUser = ref({
  profilePicture: '',
  username: '',
  fullName: '',
  category: ''
})

export function setCurrentUser(data = {}) {
  currentUser.value = { ...currentUser.value, ...data }
}

export function clearCurrentUser() {
  currentUser.value = { profilePicture: '', username: '', fullName: '', category: '' }
}
