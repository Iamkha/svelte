<script lang="ts">

	export let bgColor = 'red';
	export let id = '';
	export let showPassword = false;
	export let  onInput: (value: any) => void;
	export let classLabel = 'text font-normal pl-[5px] cursor-pointer text-[13px] ';

	function handleInput(event : any) {
    onInput(event.target.checked);
  }
</script>

<div class="relative flex justify-start items-center  mt-[21px] ">
	<input
		type="checkbox"
		checked={showPassword}
		on:change={handleInput}
		class={bgColor}
		{id}
	/>
	<label for={id} class={classLabel}><slot /></label>
</div>

<style>
	input {
		margin: 1px 0 0 0;
		margin-inline-end: 7px;
		position: relative;
		top: 0px;
		appearance: none;
		-webkit-appearance: none;
		background: #fff;
		color: #fff;
		text-align: center;
		line-height: 12px;
		border-radius: 2px;
		cursor: pointer;
		box-shadow: none !important;
	}
	input:focus {
		outline: none !important;
	}

	input[type='checkbox']:checked {
		box-shadow: none;
		outline: none;
		border: none;
	}

	input[type='checkbox']:before {
		font-family: 'Font Awesome 6 Free';
		content: '\f00c';
		opacity: 0;
		font-weight: 600;
		font-size: 15px;
		color: white;
		margin-top: 1.7px;
		margin-left: 1px;
		cursor: pointer;
		display: block;
	}
	input[type='checkbox']:checked:before {
		opacity: 1;
		font-weight: 600;
		font-size: 10px;
		color: white;
		cursor: pointer;
		display: block;
	}
	.red[type='checkbox']:hover:after {
		transform: scale(1);
		opacity: 1;
	}
	.red[type='checkbox']:after {
		content: '';
		background: rgba(214, 42, 42, 0.4);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: block;
		position: absolute;
		left: calc(50% - 20px);
		top: calc(50% - 20px);
		transform: scale(0);
		opacity: 0;
		transition: all ease 0.4s;
	}

	.blue {
		width: 13px;
		height: 13px;
		border: 1px solid #ccc;
	}
	.blue:focus {
		border: 1px solid #ccc;
	}

	.blue[type='checkbox']:checked {
		background: #1979c3;
		border-color: #1979c3;
	}

	.blue[type='checkbox']:before {
		margin-top: 0.5px;
		margin-left: 0.5px;
	}
	.blue[type='checkbox']:checked:before {
		margin-top: 0.5px;
		margin-left: 0.5px;
	}

	.red {
		width: 16px;
		height: 16px;
		border: 2px solid #ccc;
	}
	.red:focus {
		border: 2px solid #ccc;
	}

	.red[type='checkbox']:checked {
		background: #da3f3f;
		border-color: #da3f3f;
	}

	.red[type='checkbox']:before {
		margin-top: 1.7px;
		margin-left: 1px;
	}
	.red[type='checkbox']:checked:before {
		margin-top: 1.7px;
		margin-left: 1px;
	}
</style>
