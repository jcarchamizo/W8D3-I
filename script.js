<script>
    function consultarHoroscopo() {
      const signo = document.getElementById("signo").value.toLowerCase().trim();
      const resultado = document.getElementById("resultado");

      let mensaje = "";
      let imagen = "https://via.placeholder.com/300x200?text=Astro-Loca+te+guía";

      switch (signo) {
        case "aries":
          mensaje = "¡Semana llena de energía! Aprovecha tu impulso para iniciar nuevos proyectos.";
          break;
        case "tauro":
          mensaje = "Busca el equilibrio entre trabajo y placer. ¡No todo es esfuerzo!";
          break;
        case "geminis":
          mensaje = "Semana de conversaciones intensas. ¡Escucha antes de hablar!";
          break;
        case "cancer":
          mensaje = "Refugio emocional en tu hogar. ¡Rodéate de quienes amas!";
          break;
        case "leo":
          mensaje = "¡Tu brillo es imparable! Lidera con el corazón esta semana.";
          break;
        case "virgo":
          mensaje = "Momento ideal para organizar tu entorno. ¡El orden traerá paz!";
          break;
        case "libra":
          mensaje = "Las decisiones difíciles se resolverán si escuchas a tu intuición.";
          break;
        case "escorpio":
          mensaje = "Pasiones intensas en el aire. Canaliza tu energía con propósito.";
          break;
        case "sagitario":
          mensaje = "¡Aventuras a la vista! No pierdas tu espíritu curioso.";
          break;
        case "capricornio":
          mensaje = "Constancia y responsabilidad serán premiadas esta semana.";
          break;
        case "acuario":
          mensaje = "Tus ideas locas serán más valoradas de lo que crees. ¡Exprésalas!";
          break;
        case "piscis":
          mensaje = "Sensibilidad elevada. Ideal para crear, soñar y conectar.";
          break;
        default:
          mensaje = "Mmm... no reconozco ese signo. ¿Seguro que lo escribiste bien?";
          imagen = "https://via.placeholder.com/300x200/ffcccc?text=Signo+no+válido";
      }

      resultado.innerHTML = 
        <h2>${mensaje}</h2>
        <img src="${imagen}" alt="Predicción de la pitonisa">
    }
  </script>