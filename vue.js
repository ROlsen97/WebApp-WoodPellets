const baseurl = "https://woodpelletsapi.azurewebsites.net/api/WoodPellets";

Vue.createApp({
    data() {
        return {
            WoodPellets: [],
            updatedPellet: {
                id: 0,
                brand: '',
                price: 0,
                quality: 0
            },
            updateMessage: "",
            woodpellet: null,
            idToGetBy: null
        }
    },
    methods: {
        async getWoodPellets() {
            try {
                console.log('Fetching Wood pellets');
                const response = await axios.get(baseurl);
                this.WoodPellets = response.data;
            } catch (ex) {
                console.error(ex);
            }
        },
        async getById(id) {
            const url = baseurl + "/" + id
            try {
                const response = await axios.get(url)
                this.woodpellet = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    },
    mounted() {
        console.log('Component mounted');
        this.getWoodPellets();
    },
}).mount("#app");
