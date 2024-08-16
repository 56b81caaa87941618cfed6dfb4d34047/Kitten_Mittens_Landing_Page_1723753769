Vue.component('echarts_bar_chart_1723756644', {
    template: `
        <div class="flex justify-center items-center min-h-screen bg-gray-100">
            <div class="bg-white shadow-lg rounded-lg p-8 m-4 max-w-sm w-full">
                <h2 class="text-2xl font-bold mb-6 text-center">Node Operator Signup</h2>
                <form @submit.prevent="submitForm" class="space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div>
                        <label for="stake" class="block text-sm font-medium text-gray-700">Stake Amount</label>
                        <input type="number" id="stake" v-model="form.stake" required min="0" step="0.01" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div>
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign Up
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
                stake: null
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
                stake: null
            };
        }
        // end resetForm() method
    }
});