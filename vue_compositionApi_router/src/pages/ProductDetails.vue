<template>
  <section>
    <h2>{{ selectedProduct.title }}</h2>
    <h3>${{ selectedProduct.price}}</h3>
    <p>{{ selectedProduct.description}}</p>
  </section>
</template>

<script setup>
import { inject,defineProps } from 'vue';
import { useRoute} from 'vue-router';

const props = defineProps({
  pid: String,
});

const route = useRoute();
console.log(route);

    const products = inject('products');
    console.log(products)
    const selectedProduct = products.value.find(product => product.id === props.pid );

    // or with route instead of props: const selectedProduct = products.value.find(product => product.id === route.params.pid);


    alert(selectedProduct.id);

  

</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>