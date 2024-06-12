<template>
  <div class="w-full">
    <div
      class="flex flex-col w-full px-20 py-7 rounded-t-xl bg-slate-200/60 backdrop-blur-md"
    >
      <p class="font-bold text-zinc-700 text-3xl">Selamat Datang,</p>
      <p class="font-medium text-zinc-700 text-xl">
        Silahkan isi formulir dibawah terlebih dahulu.
      </p>
    </div>
    <div
      class="w-full px-20 py-10 rounded-b-xl bg-gray-900/15 backdrop-blur-lg shadow-md"
    >
      <div class="flex flex-col mb-10 ap-5 max-h-[450px] overflow-y-auto">
        <ReusableTextField
          label="Nama Pengunjung"
          id="namapengunjung"
          placeholder="Masukkan nama lengkap anda"
        />
        <ReusableTextField
          label="Nomor Telepon"
          id="nomortelepon"
          placeholder="Masukkan nomor telepon atau whatsapp aktif anda"
        />
        <div class="flex justify-between mr-5 ml-1 mb-5">
          <p class="text-white font-regular italic">Perwakilan Instansi?</p>

          <label class="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              v-model="showInstansiForm"
              class="sr-only peer"
            />
            <div
              class="relative w-12 h-6 bg-white/35 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </label>
        </div>
        <div v-if="showInstansiForm">
          <ReusableTextField
            label="Nama Instansi"
            id="namainstansi"
            placeholder="Masukkan nama instansi anda"
          />
        </div>
        <ReusableTextField
          label="Alamat"
          id="alamatpengunjung"
          placeholder="Masukkan alamat pribadi (atau instansi) anda"
        />
        <div class="flex flex-col gap-2 mr-5 mb-5 ml-1">
          <label for="" class="text-2xl font-semibold text-white">Tujuan</label>
          <textarea
            id="tujuan"
            rows="4"
            class="block p-3 w-full text-base backdrop-blur-lg text-white placeholder-white border-gray-300 rounded-lg bg-white/10 font-semibold focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="Jelaskan tujuan anda"
          ></textarea>
        </div>
        <div class="flex flex-col gap-2 mr-5 mb-5 ml-1">
          <label for="" class="text-2xl font-semibold text-white"
            >Bertemu Dengan</label
          >
          <select
            id="guru"
            class="backdrop-blur-lg text-white placeholder-white border-gray-300 rounded-lg bg-white/10 focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none block w-full p-2.5"
          >
            <option selected>Pilih guru</option>
            <option value="1">Guru 1</option>
            <option value="2">Guru 2</option>
            <option value="3">Guru 3</option>
            <option value="4">Guru 4</option>
          </select>
        </div>
        <div class="flex flex-col gap-2 mr-5 mb-5 ml-1">
          <label for="" class="text-2xl font-semibold text-white"
            >Tanda Tangan</label
          >
          <ReusableSignaturePad />
        </div>
      </div>
      <button
        class="w-full p-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center mt-5"
      >
        Simpan
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showInstansiForm: false,
    };
  },
});
</script>

<style scoped>
#guru option {
  background-color: rgba(31, 41, 55, 0.9);
  color: white;
}
/* Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

/* Scrollbar Track */
::-webkit-scrollbar-track {
  background: #f6f6f6;
  border-radius: 6px;
}

/* Scrollbar Thumb */
::-webkit-scrollbar-thumb {
  background: #a8a8a8;
  border-radius: 6px;
  max-height: 10px;
  padding: 4px;
}
</style>
