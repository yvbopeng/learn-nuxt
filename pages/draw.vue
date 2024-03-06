<template>
  <div
    class="draw"
    @mousedown="startEvent"
    @mousemove="moveEvent"
    @mouseup="endEvent"
  >
    <button @click="startDrawRect">
      <span>矩形</span>
    </button>
    <div id="container" />
  </div>
</template>

<script setup>
import Konva from "konva";

const rectWidth = ref(0);
const rectHeight = ref(0);
const rectX = ref(0);
const rectY = ref(0);
const drawEnable = ref(false);
const drawEnd = ref(false);
let stage = null;
let layer = null;
let currentRect = null;
const rectList = [];
const startPoint = {
  x: 0,
  y: 0,
};
const trList = {};

function init() {
  const width = window.innerWidth;
  const height = window.innerHeight - 50;
  stage = new Konva.Stage({
    container: "container",
    width,
    height,
  });

  layer = new Konva.Layer();
  layer.on("click", function () {
    console.log("click-layer", this);
  });
}

onMounted(() => {
  init();
});
function startDrawRect() {
  drawEnable.value = true;
}

function drawRect(x, y, width, height) {
  currentRect = new Konva.Rect({
    x,
    y,
    width,
    height,
    stroke: "blue",
    strokeWidth: 4,
    perfectDrawEnabled: false,
  });
  currentRect.draggable("true");
  currentRect.on("click", function () {
    console.log("click rect", this);
    if (!trList[this._id]) {
      const tr = new Konva.Transformer();
      layer.add(tr);
      tr.nodes([this]);
      trList[this._id] = tr;
    } else {
      console.log("删除tr");
      trList[this._id].remove();
      delete trList[this._id];
    }
  });
  layer?.add(currentRect);
  stage.add(layer);
}

function startEvent(e) {
  console.log(stage);
  drawEnd.value = false;
  if (drawEnable.value) {
    rectWidth.value = 1;
    rectHeight.value = 1;
    rectX.value = e.clientX;
    rectY.value = e.clientY;
    startPoint.x = e.clientX;
    startPoint.y = e.clientY;
    drawRect(rectX.value, rectY.value, rectWidth.value, rectHeight.value);
  }
}

function moveEvent(e) {
  if (drawEnable.value && !drawEnd.value) {
    currentRect.remove();
    const width = e.clientX - startPoint.x;
    const height = e.clientY - startPoint.y;
    drawRect(rectX.value, rectY.value, width, height);
  }
}

function endEvent(e) {
  rectList.push(currentRect);
  currentRect = null;
  drawEnable.value = false;
  drawEnd.value = true;
}
</script>

<style lang="scss" scoped>
.draw {
  width: 100vw;
  height: 100vh;
}
</style>
