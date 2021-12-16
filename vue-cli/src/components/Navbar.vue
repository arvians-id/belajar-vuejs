<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border mb-4">
            <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'home' }">Widdy Arfiansyah</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'post.index' }">Posts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'post.create' }">Create Post</router-link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>