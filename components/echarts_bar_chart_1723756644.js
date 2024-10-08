Vue.component('echarts_bar_chart_1723756644', {
    template: `
        <div class="flex justify-center items-center min-h-screen bg-cover bg-center" style="background-image: url('https://source.unsplash.com/random/1920x1080/?pink,nebula');">
            <div class="bg-pink-600 bg-opacity-90 shadow-2xl rounded-xl p-8 m-4 max-w-sm w-full border border-pink-400">
                <h2 class="text-2xl font-bold mb-6 text-center text-white">Node Operator Signup</h2>
                <form @submit.prevent="submitForm" class="space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-pink-100">Name</label>
                        <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-700 text-white placeholder-pink-300">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-pink-100">Email</label>
                        <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-700 text-white placeholder-pink-300">
                    </div>
                    <div>
                        <label for="nodeName" class="block text-sm font-medium text-pink-100">Node Name</label>
                        <input type="text" id="nodeName" v-model="form.nodeName" required class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-700 text-white placeholder-pink-300">
                    </div>
                    <div>
                        <label for="nodeType" class="block text-sm font-medium text-pink-100">Node Type</label>
                        <select id="nodeType" v-model="form.nodeType" required class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-700 text-white">
                            <option value="validator">Validator</option>
                            <option value="fullNode">Full Node</option>
                            <option value="lightNode">Light Node</option>
                        </select>
                    </div>
                    <div>
                        <label for="stakeAmount" class="block text-sm font-medium text-pink-100">Stake Amount</label>
                        <input type="number" id="stakeAmount" v-model="form.stakeAmount" required min="0" step="0.01" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-700 text-white placeholder-pink-300">
                    </div>
                    <div>
                        <label for="stakeCurrency" class="block text-sm font-medium text-pink-100">Stake Currency</label>
                        <select id="stakeCurrency" v-model="form.stakeCurrency" required class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-700 text-white">
                            <option value="ETH">ETH</option>
                            <option value="BTC">BTC</option>
                            <option value="USDT">USDT</option>
                            <option value="USDC">USDC</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out">
                            <i class='bx bx-user-plus mr-2'></i> Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `,
    data() {
        return {
            form: {
                name: '',
                email: '',
                nodeName: '',
                nodeType: '',
                stakeAmount: null,
                stakeCurrency: ''
            }
        }
    },
    methods: {
        // start submitForm() method
        submitForm() {
            console.log('Form submitted:', this.form);
            // Here you would typically send the form data to your backend
            // For now, we'll just log it to the console
            alert('Form submitted successfully!');
            this.resetForm();
        },
        // end submitForm() method

        // start resetForm() method
        resetForm() {
            this.form = {
                name: '',
                email: '',
                nodeName: '',
                nodeType: '',
                stakeAmount: null,
                stakeCurrency: ''
            };
        }
        // end resetForm() method
    }
});