const app = new Vue({
    el: '#app',
    router,
    data() {
        return {
            id: 0,
            barang: [],
            data: [],
            carts: [],
            totalHarga: 0,
            loading: true,
            errors: {
                status: false,
                message: ''
            }
        };
    },
    mounted() {
        const path = 'https://fakestoreapi.com/products?limit=5'
        axios.get(path)
            .then(response => this.barang = response.data.map(e => ({...e,qty: 0})))
            .catch(error => {
                this.errors.status = true;
                this.errors.message = error.message;
            })
            .finally(() => this.loading = false);
    },
    computed: {
        totalItem() {
            let data = this.carts.map(e => (e.qty));
            return this.carts != '' ? data.reduce((item, i) => item += i) : '0';
        }
    },
    methods: {
        addBarang(e) {
            let data = {
                id: this.barang.length + 1,
                title: this.barang.title,
                price: this.barang.price,
                image: null,
                qty: 0
            };
            this.barang.push(data);

            this.barang.title = '';
            this.barang.price = '';

            router.push({ name: 'home' })
        },
        deleteBarang(id, index) {
            let cart = this.carts.filter(item => item.id_barang == id);
            if (cart.length) {
                let countCart = cart.map(item => item.price * item.qty);
                let priceCart = countCart.reduce((item, i) => item += i);
                this.totalHarga -= priceCart;

                this.carts = this.carts.filter(item => item.id !== cart[0].id)
            }
            this.barang.splice(index, 1);
        },
        addToCart(id) {
            let barang = this.barang.filter(item => item.id == id)[0];

            let cart = {
                id: this.id++,
                id_barang: barang.id,
                title: barang.title,
                price: barang.price,
                qty: 1
            };
            let getCart = this.carts.filter(item => item.id_barang == barang.id)[0];
            getCart ? getCart.qty++ : this.carts.push(cart);

            let countCart = this.carts.map(item => item.price * item.qty);
            this.totalHarga = countCart.reduce((item, i) => item += i);
        },
        removeFromCart(id) {
            let getCart = this.carts.filter(item => item.id_barang == id)[0];
            if (getCart != undefined) {
                if (this.totalHarga > 0 && getCart.qty > 0) {
                    getCart.qty--;
                    this.totalHarga -= getCart.price;
                }

                if (getCart.qty == 0) {
                    this.carts = this.carts.filter(item => item.id !== getCart.id)
                }
            }
        },
    }
})