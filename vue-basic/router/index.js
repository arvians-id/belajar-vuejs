const Form = {
    props: ['barang'],
    template: ` <div>
                    <form @submit.prevent="$emit('add-barang')" class="pb-3">
                        <div class="row pb-3">
                            <div class="col-12 col-md-6">
                                <input type="text" placeholder="Nama Barang" v-model="barang.title" class="form-control" required>
                            </div>
                        </div>
                        <div class="row pb-3">
                            <div class="col-12 col-md-6">
                                <input type="number" placeholder="Harga Barang" v-model.number="barang.price" class="form-control" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Tambah</button>
                    </form>
                </div>`
}

const Home = {
    props: ['total', 'carts', 'item', 'barang', 'loading', 'errors'],
    methods: {
        showImage(pathImage) {
            return pathImage ?? 'assets/images/no-image.png';
        },
    },
    template: ` <div>
                    <table class="table table-bordered table-striped no-wrap">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Photo</th>
                                <th>Barang</th>
                                <th>Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="loading">
                                <tr><td colspan="5" :class="{ loads: loading }" class="text-center">Loading </td></tr>
                            </template>
                            <template v-else>
                                <template v-if="errors.status == false">
                                    <template v-if="barang.length > 0">
                                        <tr v-for="(brg,i) in barang" :key="brg.id">
                                            <td>{{ i + 1 }}</td>
                                            <td>
                                                <img :src="showImage(brg.image)" width="50">
                                            </td>
                                            <td>{{ brg.title }}</td>
                                            <td>\${{ brg.price }}</td>
                                            <td>
                                                <button @click="$emit('delete-barang', brg.id,i)" class="btn btn-danger mt-1 btn-sm">Delete</button>
                                                <button @click="$emit('add-to-cart', brg.id)" class="btn btn-secondary mt-1 btn-sm">+</button>
                                                <button @click="$emit('remove-from-cart', brg.id)" class="btn btn-secondary mt-1 btn-sm">-</button>
                                            </td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                            <tr><td colspan="5" class="text-center">Data Not Found</td></tr>
                                    </template>
                                </template>
                                <template v-else>
                                    <tr><td colspan="5" class="text-center">{{ errors.message }}</td></tr>
                                </template>
                            </template>
                        </tbody>
                    </table>
                    <div>
                        <h3>Keranjang Anda</h3>
                        <ul>
                            <li v-for="cart in carts" :key="cart.id">
                                Barang : {{ cart.title }} | Price : \${{ cart.price }} | Total : {{ cart.qty }}
                            </li>
                        </ul>
                        <p>Total Item {{ item }} <br> Total Harga \${{ total }}</p>
                    </div>
                </div>`
}

const NotFound = {
    template: `<h3>404 NOT FOUND</h3>`
}

const router = new VueRouter({
    linkClassActive: 'active',
    routes: [{
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/create',
            component: Form,
            name: 'create'
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});