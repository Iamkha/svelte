<script  lang="ts">
	export let value = '';
	export let error = '';
	export let toucher = false;
	export let id = '';

	export let text = '';
	export let show = true;
	export let inverse = false;
	export let inputName = 'inputName';
	export let errorClass = 'erorr';
	export let nameTitle = 'name';
	export let placeholder = '';
	export let type = 'text';
	export let  onInput: (value: any) => void;



</script>

<div class="mb-[10px]">
	<p class={nameTitle} class:inverse>{text}</p>
	<input
	 id={id}
		class=" {inputName}  "
		value
		{placeholder}
		on:change={onInput}
		type={show ? type : 'password'}
	/>
	{#if error}<p class="{errorClass} relative">{error}</p>{/if}
</div>

<style>
	.name {
		cursor: pointer;
		font-size: 13px;
	}
	.boder {
		border-color: #ed8380;
	}
	.erorr {
		color: #e02b27;
		font-size: 12px;
		margin-top: 7px;
	}
	.inverse::after {
		content: '*';
		color: #e02b27;
		font-size: 12px;
		margin: 0 0 0 5px;
		font-weight: normal;
		box-sizing: border-box;
		text-align: inherit;
		width: 7.11px;
		height: 18px;
		letter-spacing: normal;
	}

	.inputName:focus {
		border: 1px solid #c2c2c2 !important;
		outline: none;
	}

	.inputName {
		color: #000;
		border-color: #e1e1e1;
		background: transparent;
		font: 400 14px/1.35 Jost, Helvetica Neue, Verdana, Arial, sans-serif;
		height: 35px;
		line-height: 35px;
		padding-left: 10px;
		padding-right: 10px;
		outline: none;
		background-clip: padding-box;
		box-shadow: none;
		border-width: 1px;
		border-radius: 2px;
		border: 1px solid #c2c2c2;
		vertical-align: baseline;
		width: 100%;
		box-sizing: border-box;
		-webkit-box-shadow: 0 0 0 30px white inset !important;
		-webkit-text-fill-color: #000;
	}

	.inputHoverBlue {
		background: #fff;
		background-clip: padding-box;
		border: 1px solid #c2c2c2;
		border-radius: 1px;
		font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 14px;
		height: 32px;
		line-height: 1.42857143;
		padding: 0 9px;
		vertical-align: baseline;
		width: 100%;
		box-sizing: border-box;
	}
	.inputHoverBlue:focus {
		box-shadow: 0 0 3px 1px #00699d !important;
	}
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
</style>
