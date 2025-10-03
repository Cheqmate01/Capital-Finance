<template>
    <div class="bg-[#070024] text-white min-h-screen flex flex-col sm:flex-row">
    <!-- Sidebar -->
    <aside class="hidden sm:w-64 bg-gray-950 text-gray-400 p-3 sm:p-6 sm:flex flex-row sm:flex-col h-auto sm:h-screen sticky top-0">
        <div class="mb-4 sm:mb-10">
        <h1 class="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-800">
            BusBoard
            </h1>
        <p class="text-xs sm:text-sm">Business Dashboard</p>
        </div>
        <nav class="space-y-2 sm:space-y-4 flex-1 flex flex-row sm:flex-col gap-2 sm:gap-0">
            <a href="#overview" class="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg hover:bg-gray-800 transition duration-200 text-xs sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 8zM5 11a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5 14a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z"/></svg>
                <span>Dashboard</span>
            </a>
            <a href="#analytics" class="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg hover:bg-gray-800 transition duration-200 text-xs sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-3.293 3.293a1 1 0 01-1.414 0l-1.586-1.586a1 1 0 00-1.414 0L5 13.586V10a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2H6.414l2.293-2.293a1 1 0 011.414 0l1.586 1.586a1 1 0 001.414 0L16.586 9H13a1 1 0 110-2z" clip-rule="evenodd"/></svg>
                <span>Analytics</span>
            </a>
            <a href="#financial-tools" class="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg hover:bg-gray-800 transition duration-200 text-xs sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-3.284l-.993-2.648A2 2 0 0011.018 2H8.982c-.966 0-1.89.544-2.365 1.452L5.284 6H4zM16 12a1 1 0 11-2 0 1 1 0 012 0zm-5 1a1 1 0 100-2 1 1 0 000 2z"/></svg>
                <span>Financial Tools</span>
            </a>
            <a href="#security" class="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg hover:bg-gray-800 transition duration-200 text-xs sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a9 9 0 019 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 019-9zm0 2a7 7 0 100 14A7 7 0 0010 3zm0 4a3 3 0 110 6 3 3 0 010-6z" clip-rule="evenodd"/></svg>
                <span>Security</span>
            </a>
            <a href="#support" class="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg hover:bg-gray-800 transition duration-200 text-xs sm:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 10-12 0 6 6 0 0012 0zm-8-3a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm0 4a1 1 0 110-2h2a1 1 0 110 2h-2a1 1 0 01-1-1z"/></svg>
                <span>Support</span>
            </a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 px-2 pt-8 sm:p-8">
        <header class="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 gap-2 sm:gap-0">
        <h2 class="text-xl sm:text-3xl font-semibold">Business Dashboard</h2>
        <div class="flex items-center space-x-2 sm:space-x-4">
            <span class="text-gray-400 text-xs sm:text-base">Welcome to Our Business' Page</span>
            </div>
        </header>

        <div class="space-y-6 sm:space-y-12">
            <section id="analytics">
                <h3 class="text-lg sm:text-2xl font-bold section-title mb-3 sm:mb-6">Enhanced Reporting & Analytics</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-8">
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Portfolio Value</h4>
                        <p class="text-lg sm:text-3xl font-bold text-green-400">$1,234,567+</p>
                        <p class="text-gray-500 text-xs sm:text-base">+5.2% in last 30 days</p>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-1 sm:mb-2">BTC Holdings</h4>
                        <p class="text-lg sm:text-3xl font-bold">102.34+ BTC</p>
                        <p class="text-gray-500 text-xs sm:text-base">$598,765.00</p>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Total Transactions</h4>
                        <p class="text-lg sm:text-3xl font-bold">5,432+</p>
                        <p class="text-gray-500 text-xs sm:text-base">since inception</p>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Current Profit/Loss</h4>
                        <p class="text-lg sm:text-3xl font-bold text-red-400">-$2,123.45</p>
                        <p class="text-gray-500 text-xs sm:text-base">last 30 days</p>
                    </div>
                </div>

                <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl mb-3 sm:mb-6">
                    <div class="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4 gap-2 sm:gap-0">
                        <h4 class="text-base sm:text-xl font-semibold">Transaction History</h4>
                        <button class="bg-gray-800 text-gray-300 py-1 sm:py-2 px-2 sm:px-4 rounded-lg hover:bg-gray-700 transition text-xs sm:text-base">
                            Download CSV
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs sm:text-base">
                            <thead>
                                <tr class="border-b border-gray-700 text-gray-400">
                                    <th class="py-1 sm:py-2 px-2 sm:px-4">Date</th>
                                    <th class="py-1 sm:py-2 px-2 sm:px-4">Asset</th>
                                    <th class="py-1 sm:py-2 px-2 sm:px-4">Type</th>
                                    <th class="py-1 sm:py-2 px-2 sm:px-4">Amount</th>
                                    <th class="py-1 sm:py-2 px-2 sm:px-4">Fees</th>
                                    <th class="py-1 sm:py-2 px-2 sm:px-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-800">
                                    <td class="py-1 sm:py-2 px-2 sm:px-4">2011-09-01</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4">BTC</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4 text-green-400">Deposit</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4">+0.5 BTC</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4">0.001 BTC</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4">Completed</td>
                                </tr>
                                <tr class="border-b border-gray-800">
                                    <td class="py-2 px-4">2011-08-28</td>
                                    <td class="py-2 px-4">ETH</td>
                                    <td class="py-2 px-4 text-red-400">Withdrawal</td>
                                    <td class="py-2 px-4">-1.2 ETH</td>
                                    <td class="py-2 px-4">0.005 ETH</td>
                                    <td class="py-2 px-4">Completed</td>
                                </tr>
                                <tr class="border-b border-gray-800">
                                    <td class="py-2 px-4">2011-08-25</td>
                                    <td class="py-2 px-4">USDT</td>
                                    <td class="py-2 px-4 text-green-400">Trade</td>
                                    <td class="py-2 px-4">+1500 USDT</td>
                                    <td class="py-2 px-4">2.5 USDT</td>
                                    <td class="py-2 px-4">Completed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Asset Performance Breakdown</h4>
                        <div class="h-24 sm:h-48 bg-gray-800 flex items-center justify-center rounded-lg">
                            <span class="text-gray-500 text-xs sm:text-base">Graph of asset value over time</span>
                        </div>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Tax Documentation</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Generate reports for capital gains/losses and a summary of all transactions for your fiscal year.
                        </p>
                        <button class="w-full bg-green-400 text-white font-bold py-2 sm:py-3 rounded-lg hover:bg-green-500 transition text-xs sm:text-base">
                            Generate Tax Report
                        </button>
                    </div>
                </div>
            </section>

            <section id="financial-tools">
                <h3 class="text-2xl font-bold section-title mb-6">Financial Tools</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Multi-User Access & Permissions</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Invite team members and set custom access levels for managing the business portfolio.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">Manage Team Members & Permissions →</a>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Payroll in Crypto</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Easily pay employees or contractors in crypto with a few clicks.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">Setup Payroll →</a>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Payment Gateway Integration</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Accept crypto payments directly on your website or in-store.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">View API & Documentation →</a>
                    </div>
                </div>
            </section>

            <section id="security">
                <h3 class="text-2xl font-bold section-title mb-6">Security & Compliance</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Customizable Security Protocols</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Set your own security rules, including multi-signature approval for withdrawals.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">Configure Security Settings →</a>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Proof of Funds & Audit Trail</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Generate a verifiable, digitally signed document of your current holdings.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">Generate Document →</a>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Regulatory Compliance Info</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Learn about our KYC/AML compliance and how we protect your business.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">Read More →</a>
                    </div>
                </div>
            </section>

            <section id="support">
                <h3 class="text-2xl font-bold section-title mb-6">Support & Education</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Dedicated Account Manager</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            For our business clients, we provide a dedicated point of contact for personalized support.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">Contact Your Manager →</a>
                    </div>
                    <div class="bg-gray-950 p-3 sm:p-6 rounded-lg sm:rounded-xl">
                        <h4 class="text-base sm:text-xl font-semibold mb-2 sm:mb-4">Business Resource Center</h4>
                        <p class="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-base">
                            Access guides, webinars, and articles on crypto accounting, taxes, and best practices.
                        </p>
                        <a class="cursor-pointer text-green-400 hover:underline text-xs sm:text-base">Explore Resources →</a>
                    </div>
                </div>
            </section>
        </div>
    </main>
  </div>
</template>

<script setup>
// No script logic needed for static dashboard
</script>

<style scoped>
.section-title {
  border-left: 4px solid #4ADE80;
  padding-left: 1rem;
}
</style>