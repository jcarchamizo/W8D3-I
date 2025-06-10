<script>
    function consultHoroscope() {
      const sign = document.getElementById("sign").value.toLowerCase().trim();
      const result = document.getElementById("result");

      let message = "";
      let image = "https://via.placeholder.com/300x200?text=Astro-Loca+te+guía";

      switch (sign) {
        case "aries":
          message = "¡Semana llena de energía! Aprovecha tu impulso para iniciar nuevos proyectos.";
          break;
        case "tauro":
          message  = "Busca el equilibrio entre trabajo y placer. ¡No todo es esfuerzo!";
          break;
        case "geminis":
          message = "Semana de conversaciones intensas. ¡Escucha antes de hablar!";
          break;
        case "cancer":
          message = "Refugio emocional en tu hogar. ¡Rodéate de quienes amas!";
          break;
        case "leo":
          message = "¡Tu brillo es imparable! Lidera con el corazón esta semana.";
          break;
        case "virgo":
          message = "Momento ideal para organizar tu entorno. ¡El orden traerá paz!";
          break;
        case "libra":
          message = "Las decisiones difíciles se resolverán si escuchas a tu intuición.";
          break;
        case "escorpio":
          message = "Pasiones intensas en el aire. Canaliza tu energía con propósito.";
          break;
        case "sagitario":
          message = "¡Aventuras a la vista! No pierdas tu espíritu curioso.";
          break;
        case "capricornio":
          message = "Constancia y responsabilidad serán premiadas esta semana.";
          break;
        case "acuario":
          message = "Tus ideas locas serán más valoradas de lo que crees. ¡Exprésalas!";
          break;
        case "piscis":
          message = "Sensibilidad elevada. Ideal para crear, soñar y conectar.";
          break;
        default:
          message = "Mmm... no reconozco ese signo. ¿Seguro que lo escribiste bien?";
          image = "https://via.placeholder.com/300x200/ffcccc?text=Signo+no+válido";
      

      result.innerHTML = 
        <h2>${message}</h2>
        <img src="${image}" alt="Prediction of the fortune teller">
    }
  </script>