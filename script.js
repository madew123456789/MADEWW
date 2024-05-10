 document.addEventListener("DOMContentLoaded", function() {
      var loadingDiv = document.getElementById('loading');
      var countdown = 4;  

      function updateCountdown() {
        loadingDiv.innerHTML = "<h1 style='color:yellow'>තොරන් Load වීමට මද වේලාවක් රැදී සිටින්න.<br> ඔබගේ Signal Strength එක අනුව  තොරන් Load වීමට කාලය ගත වෙයි.</h1>" +
                               "<h2 style='color:blue'>Created By P.L.Methuka Madew </h4>" +
                               "<h4>Web Page will show in " + countdown + " seconds...</h3>";

        countdown--;
        if (countdown >= 0) {
          setTimeout(updateCountdown, 1000);
        } else {
          loadingDiv.style.display = 'none';
        }
      }

      updateCountdown();
    });

