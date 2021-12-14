Vue.component('header-component', {
    data() {
        return {
            firstData: 'Widdy Arfiansyah',
        }
    },
    template: ` <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light border">
                        <router-link class="navbar-brand" :to="{ name: 'home' }">{{ firstData }}</router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'create' }">Tambah Barang</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <slot></slot>
                </header>`
});

Vue.component('footer-component', {
    template: ` <footer>
                    <p>&copy; 2021 By Widdy Arfiansyah</p>
                </footer>`,
});

Vue.component('cart-component', {
    props: ['total', 'carts', 'item'],
    template: ` <div>
                    <h3>Keranjang Anda</h3>
                    <ul>
                        <li v-for="cart in carts" :key="cart.id">
                            Barang : {{ cart.title }} | Price : \${{ cart.price }} | Total : {{ cart.qty }}
                        </li>
                    </ul>
                    <p>Total Item {{ item }} <br> Total Harga \${{ total }}</p>
                </div>`
});