Vue.component('echarts_bar_chart_1723756644', {
    template: `
        <div class="flex justify-center items-center min-h-screen bg-cover bg-center" style="background-image: url('https://source.unsplash.com/random/1920x1080/?pink,nebula');">
            <div class="bg-pink-100 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-8 m-4 max-w-sm w-full border border-pink-200">
                <h2 class="text-2xl font-bold mb-6 text-center text-pink-800">Node Operator Signup</h2>
                <form @submit.prevent="submitForm" class="space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-pink-700">Name</label>
                        <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-50 bg-opacity-50">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-pink-700">Email</label>
                        <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-50 bg-opacity-50">
                    </div>
                    <div>
                        <label for="stake" class="block text-sm font-medium text-pink-700">Stake Amount</label>
                        <input type="number" id="stake" v-model="form.stake" required min="0" step="0.01" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-pink-50 bg-opacity-50">
                    </div>
                    <div>
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out">
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