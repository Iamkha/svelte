<script>
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import Cookies from 'js-cookie';
  $: activeUrl = $page.url.pathname;
</script>

<Navbar let:hidden let:toggle>
<div class="flex justify-between items-center w-screen bg-slate-500 p-[20px]">
    <NavBrand href="/">
  <img src="https://mcdn.coolmate.me/image/May2022/xe-do-1-2_90.jpg" class="mr-3 rounded-full h-16 sm:h-16" alt="Flowbite Logo" />
  <span class="self-center whitespace-nowrap text-xl font-semibold text-orange-200">Lê Phước Kha</span>
</NavBrand>
<div  class="flex justify-center items-center gap-7" >
  <a class="text-white text-[20px] hover:text-orange-200" href="/">Home</a>
  <a class="text-white text-[20px] hover:text-orange-200"  href="/docs/components/navbar">Navbar</a>
  <a class="text-white text-[20px] hover:text-orange-200"  href="/docs/components/accordion">Accordion</a>
  <a class="text-white text-[20px] hover:text-orange-200"  href="/docs/components/alert">Alert</a>
  <a class="text-white text-[20px] hover:text-orange-200"  href="/docs/components/avatar">Avatar</a>
</div>
</div>
</Navbar>