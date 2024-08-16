/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1723834376", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="node-operator-dashboard" class="bg-pink-900 text-white flex-1">
                <div id="dashboard-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="grid grid-cols-2 gap-8">
                        <div class="flex-1 bg-pink-800 rounded-lg shadow-lg p-6">
                            <h2 class="text-2xl font-bold mb-4">Staking Overview</h2>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-pink-700 rounded-md p-4">
                                    <p class="text-lg font-semibold">Total Staked</p>
                                    <p class="text-3xl font-bold">1,000,000 ETH</p>
                                </div>
                                <div class="bg-pink-700 rounded-md p-4">
                                    <p class="text-lg font-semibold">Validators</p>
                                    <p class="text-3xl font-bold">32,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 bg-pink-800 rounded-lg shadow-lg p-6">
                            <h2 class="text-2xl font-bold mb-4">Slashing Statistics</h2>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-pink-700 rounded-md p-4">
                                    <p class="text-lg font-semibold">Slashed Validators</p>
                                    <p class="text-3xl font-bold">12</p>
                                </div>
                                <div class="bg-pink-700 rounded-md p-4">
                                    <p class="text-lg font-semibold">Total Slashed</p>
                                    <p class="text-3xl font-bold">384 ETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 bg-pink-800 rounded-lg shadow-lg p-6">
                        <h2 class="text-2xl font-bold mb-4">Recent Activity</h2>
                        <ul class="space-y-2">
                            <li class="bg-pink-700 rounded-md p-3">New validator activated</li>
                            <li class="bg-pink-700 rounded-md p-3">Rewards distributed</li>
                            <li class="bg-pink-700 rounded-md p-3">Slashing event detected</li>
                        </ul>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
