<template>

  <PdfApp style="height: 90vh" :pdf="pdfUrl" />

</template>

<script>
import PdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";

export default {
  name: "PdfViewer",
  components: {
    PdfApp
  },
  props: {
    pdfUrl: {
      type: String,
      required: true
    }
  }
};
</script>
