<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 150px;
    height: 150px;
    background: #e67e22;
    transition: border-radius 0.4s ease, background 0.4s ease;
}

.circle {
    border-radius: 50%;
    background: #2ecc71;
}
</style>
</head>
<body>

<div id="shape" class="box"></div>

<script>
const shape = document.getElementById("shape");

shape.addEventListener("mouseenter", () => {
    shape.classList.add("circle");
});

shape.addEventListener("mouseleave", () => {
    shape.classList.remove("circle");
});
</script>

</body>
</html>
