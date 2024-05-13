	<script>
        document.getElementById("startButton").addEventListener("click", function() {
        var playerName = document.getElementById("nameInput").value;
        localStorage.setItem("playerName", playerName);
        window.location.href = "Page1.html"; 
        });
    </script>