<template>
  <div class="signature-pad-container">
    <canvas ref="canvas" class="signature-pad"></canvas>
    <button @click="clearSignature" class="clear-button">Hapus</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from "vue";
import SignaturePad from "signature_pad";

export default defineComponent({
  name: "SignaturePad",
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);
    let signaturePad: SignaturePad | null = null;

    const resizeCanvas = () => {
      if (canvas.value) {
        const canvasElement = canvas.value;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvasElement.width = canvasElement.offsetWidth * ratio;
        canvasElement.height = canvasElement.offsetHeight * ratio;
        canvasElement.getContext("2d")?.scale(ratio, ratio);
        if (signaturePad) {
          signaturePad.clear(); // Clear the pad to avoid stretched drawings
        }
      }
    };

    onMounted(() => {
      if (canvas.value) {
        const canvasElement = canvas.value;
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        signaturePad = new SignaturePad(canvasElement);
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeCanvas);
    });

    const clearSignature = () => {
      if (signaturePad) {
        signaturePad.clear();
      }
    };

    return {
      canvas,
      clearSignature,
    };
  },
});
</script>

<style scoped>
.signature-pad-container {
  position: relative;
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
}

.signature-pad {
  width: 100%;
  height: 100%;
}

.clear-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
