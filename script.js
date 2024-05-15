document.getElementById("convertBtn").addEventListener("click", function() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * (5/9);
    document.getElementById("result").innerText = "Temperature in Celsius: " + celsius.toFixed(2);
});
