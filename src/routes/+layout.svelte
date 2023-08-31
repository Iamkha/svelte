<script>
  import "../app.postcss";
  import Footer from '../lib/components/footer/index.svelte';
	import Header from '../lib/components/header/Header.svelte';
</script>

<div>
	<Header />
	<slot />
	<Footer />
</div>
