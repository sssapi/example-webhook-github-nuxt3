<script lang="ts" setup>
import { MessageItem } from './types';

const url = new URL("https://api.sssapi.app/LrBc1kSx12Hq4VCmge0MP");
url.searchParams.set("order_by", "-id");
const { data: items } = await useFetch<MessageItem[]>(url.toString());

const links = {
  sssapi: "https://sssapi.app",
  form: "https://forms.gle/PGXB4uuqbQDra4mC9",
  sheets: "https://docs.google.com/spreadsheets/d/1eHkZMWH2Mkd1WLI5VfYWjIxcb72szH8PU26ZYOoiOqo/edit#gid=881105740",
  github: "https://github.co.jp/features/actions",
};
</script>

<template>
  <div class="max-w-lg mx-auto py-10 py-8">

    <h1 class="text-center my-4">
      <p class="text-2xl">SSSAPI Example</p>
      <p class="text-lg">- GitHub Action -</p>
    </h1>
    <div class="border-4 border-fuchsia-300 py-4 px-3 my-8 rounded bg-white text-sm">
      <p>
        <Link :href="links.sssapi">SSSAPI</Link>の
        <Link :href="links.github">GitHub Actions</Link>を使ったサンプルです。
      </p>
      <p>
         <Link :href="links.form">Googleフォーム</Link>に回答を送ると、数分後にサイトに反映されます。
      </p>

      <div class="flex flex-wrap justify-around mt-3">
        <Link :href="links.form" class="flex flex-nowrap items-center my-1">
          <mdicon name="monitor" size="18" class="mr-1" />
          <span>Google Forms</span>
        </Link>
        <Link :href="links.sheets" class="flex flex-nowrap items-center my-1">
          <mdicon name="table" size="18" class="mr-1" />
          <span>Google Sheets</span>
        </Link>
        <Link :href="links.github" class="flex flex-nowrap items-center my-1">
          <mdicon name="github" size="18" class="mr-1" />
          <span>GitHub Repository</span>
        </Link>
      </div>
    </div>

    <hr class="my-8 border-2 border-white border-dashed" />

    <template v-for=" item in items">
      <div class="px-4 py-3 bg-white my-4 shadow-md rounded">
        <h3 class="text-lg font-bold mb-1">{{ item.id }}.{{ item.title }}</h3>

        <p v-for="line in item.message.split('\n')">
          {{ line }}
        </p>

        <p class="text-right text-gray-400 text-sm">{{ item.タイムスタンプ }}</p>
      </div>
    </template>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-fuchsia-100
}

a {
  @apply underline
}
</style>