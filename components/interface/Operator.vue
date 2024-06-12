<template>
  <div class="w-full">
    <div
      class="flex justify-between items-center w-full px-20 py-7 rounded-t-xl bg-slate-200/60 backdrop-blur-md"
    >
      <div class="flex flex-col">
        <p class="font-bold text-zinc-700 text-3xl">PENGATURAN OPERATOR</p>
        <p class="font-medium text-zinc-700 text-xl">{{ tanggal }}</p>
      </div>
      <div class="flex gap-5">
        <button
          @click="toggleModal"
          type="button"
          class="w-10 h-10 flex items-center justify-center bg-white rounded-md"
        >
          <Icon name="material-symbols:download-2" size="20px" />
        </button>
        <button
          type="button"
          @click="toggleModalPg"
          class="w-10 h-10 flex items-center justify-center bg-white rounded-md"
        >
          <Icon name="ep:tools" size="20px" />
        </button>
      </div>
    </div>
    <div
      class="w-full px-20 py-10 rounded-b-xl bg-gray-900/15 backdrop-blur-lg shadow-md"
    >
      <div
        class="relative max-h-[450px] overflow-y-auto overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Nama Pengunjung</th>
              <th scope="col" class="px-6 py-3">Nomor Telepon</th>
              <th scope="col" class="px-6 py-3">Alamat</th>
              <th scope="col" class="px-6 py-3">Nama Instansi</th>
              <th scope="col" class="px-6 py-3">Tujuan</th>
              <th scope="col" class="px-6 py-3">Dengan</th>
              <th scope="col" class="px-6 py-3">Tanda Tangan</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              v-for="(pengunjung, index) in pengunjungs"
              :key="index"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ index + 1 }}
              </th>
              <td class="px-6 py-4">{{ pengunjung.nama }}</td>
              <td class="px-6 py-4">{{ pengunjung.telepon }}</td>
              <td class="px-6 py-4">{{ pengunjung.alamat }}</td>
              <td class="px-6 py-4">{{ pengunjung.instansi }}</td>
              <td class="px-6 py-4">{{ pengunjung.tujuan }}</td>
              <td class="px-6 py-4">{{ pengunjung.dengan }}</td>
              <td class="px-6 py-4">{{ pengunjung.tandaTangan }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <ModalDownload :isVisible="isModalVisible" @close="toggleModal" />
    <ModalPengaturan :isVisible="pengaturanVisible" @close="toggleModalPg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
    const pengaturanVisible = ref(false);
    const isModalVisible = ref(false);
    const tanggal = ref("");

    const formatDate = (date: Date) => {
      const day = date.getDate().toString().padStart(2, "0");
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };

    onMounted(() => {
      const now = new Date();
      tanggal.value = formatDate(now);
    });

    const toggleModal = () => {
      isModalVisible.value = !isModalVisible.value;
    };

    const toggleModalPg = () => {
      pengaturanVisible.value = !pengaturanVisible.value;
    };

    const pengunjungs = ref([
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
      {
        nama: "Alan Walker",
        telepon: "087761234292",
        alamat: "Norwegia",
        instansi: "-",
        tujuan: "Mencari info daftar PPDB",
        dengan: "Leon S Kennedy s.Pd",
        tandaTangan: "",
      },
    ]);

    return {
      isModalVisible,
      pengaturanVisible,
      toggleModalPg,
      toggleModal,
      tanggal,
      pengunjungs,
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
