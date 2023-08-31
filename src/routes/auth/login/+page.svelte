<script lang="ts">
	import  Icon  from '@iconify/svelte';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { createForm } from "svelte-forms-lib";
  import InputCustomes from '$lib/components/input/InputCustomes.svelte';
	
	import jwt from 'jwt-decode';
	import Cookies from 'js-cookie';
	import { loginSchema } from '$lib/components/yup/loginSchema';
	import InputCheck from '$lib/components/input/InputCheck.svelte';
	import type { ITokenData } from '$lib/components/interface/ITokenData';
	import Error from '$lib/components/error/Error.svelte';
	import { signIn } from '$lib/components/api/user/loginUser';

	 let loading = false;
	 let show = false;
	 let error= ''


	
  const { form, errors, state, touched, handleChange, handleSubmit } = createForm({
    initialValues: {
      password: "",
      email: ""
    },
    validationSchema:loginSchema,
    onSubmit: async values =>  {
						loading = true;
		try {
				const resp =   await signIn(values.email, values.password)		

				if (resp.status === 200) {
					loading = false;
	   			Cookies.set('token', resp.data.token)
					
				 goto('/');
				}
			} catch (e: any) {
				loading = false;
				 error= e.response.data.message || "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
			}
    }
  });

	$: handleShow = (value: any) => {
		
		show = value
	};


</script>


	
<div class="flex justify-center items-center  h-[487px]"> <div class=" form w-[668px]  flex justify-center items-center">
	<form
		on:submit|preventDefault={handleSubmit}
		class="w-[412.81px]  "
	>
	<p class="text-[30px] w-full text-center font-semibold ">Login</p>
   {#if error!==''}
	 <Error error= {error} />
	 {/if}
		<div
		class={$errors.password
			? 'w-full  mb-[20px] font-normal text-[13px] text-left cursor-pointer pt-[6px]  h-[80.72px]'
			: 'w-full mb-[20px] font-normal text-[13px] text-left cursor-pointer pt-[6px]  h-[54px]'}
		>
		<InputCustomes
		onInput={handleChange}
		id='email'
		inverse
		error={$errors.email}
		bind:value={$form.email}
		show={true}
		text={'Email'}
		/>
		</div>
		<div
			class={$errors.password
				? 'w-full  mb-[20px] font-normal text-[13px] text-left cursor-pointer pt-[6px]  h-[80.72px]'
				: 'w-full mb-[20px] font-normal text-[13px] text-left cursor-pointer pt-[6px]  h-[54px]'}
		>
		<InputCustomes
		onInput={handleChange}
		id='password'
		inverse
		error={$errors.password}
		bind:value={$form.password}
		show={show}
		text={'Password'}
		/>
		</div>
		<div class="mb-[15px]">
			<InputCheck bgColor="red" id="chechShow" onInput={handleShow}
				><p>Show Password</p></InputCheck
			>
		</div>
		<button disabled={loading} type="submit" class=" bg-gray-700 hover:bg-slate-950 disabled:bg-slate-300  rounded-2xl w-full text-white py-2 uppercase"
			>{#if loading}
				<div class="loading flex justify-center items-center">
					<Icon icon="uiw:loading" />
				</div>
			{:else}
				sign in
			{/if}
		</button>
	</form>
</div>
</div>
<style>
</style>
