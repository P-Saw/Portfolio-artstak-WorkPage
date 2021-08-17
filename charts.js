// CHART CARDS DOUGHNUT
//Setup part prepare data variables for all charts
const data = {
  datasets: [
    {
      data: [40, 60],
      backgroundColor: ["#40b1a1", "transparent"],
      borderRadius: 10,
      cutout: "70%",
    },
    {
      weight: 1,
    },
    {
      data: [100],
      backgroundColor: ["#40b1a1"],
      cutout: "70%",
    },
  ],
};

const data1 = {
  datasets: [
    {
      data: [85, 15],
      backgroundColor: ["#E51577", "transparent"],
      borderRadius: 10,
      borderWidth: 0,
      cutout: "93%",
    },
  ],
};

const data2 = {
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#E51577", "transparent"],
      borderRadius: 10,
      borderWidth: 0,
      cutout: "93%",
    },
  ],
};

const data3 = {
  datasets: [
    {
      data: [90, 10],
      backgroundColor: ["#40b1a1", "transparent"],
      borderRadius: 10,
      cutout: "75%",
    },
    {
      weight: 1,
    },
    {
      data: [100],
      backgroundColor: ["#40b1a1"],
      cutout: "75%",
    },
  ],
};

const data4 = {
  datasets: [
    {
      data: [45, 55],
      backgroundColor: ["#F25B41", "transparent"],
      borderRadius: 10,
      borderWidth: 0,
      cutout: "93%",
    },
  ],
};

//Center texts plugins
const center = {
  id: "center",
  beforeDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();
    ctx.font = "bold 22px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#343240";
    ctx.fillText("$456", width / 2, height / 2);
    ctx.font = "11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#9F9AB7";
    ctx.fillText("Total payout", width / 2, height / 2 + 15);
  },
};

const center1 = {
  id: "center1",
  beforeDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#E51577";
    ctx.fillText("High", width / 2, height / 2);
    ctx.font = "21px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000000";
    ctx.fillText("demand", width / 2, height / 2 + 25);
  },
};

const center2 = {
  id: "center2",
  beforeDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#343240";
    ctx.fillText("$19.99", width / 2, height / 2);
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#9F9AB7";
    ctx.fillText("Total payout", width / 2, height / 2 + 25);
  },
};

const center3 = {
  id: "center",
  beforeDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#343240";
    ctx.fillText("$1.247", width / 2, height / 2);
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#9F9AB7";
    ctx.fillText("Total payout", width / 2, height / 2 + 25);
  },
};

const center4 = {
  id: "center",
  beforeDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#FF9C64";
    ctx.fillText("Medium", width / 2, height / 2);
    ctx.font = "21px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000000";
    ctx.fillText("demand", width / 2, height / 2 + 25);
  },
};

//Config part
function makeConfig(data, plugin) {
  const config = {
    type: "doughnut",
    data,
    options: {
      animation: {
        duration: 3000,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    plugins: [plugin],
  };
  return config;
}

//Render on scroll
const chartContainer = document.querySelector(".monitor-img");
const fourCharts = document.querySelector(".four-charts-container");

function scrollOneChart() {
  const offsetForChartToDisplay = chartContainer.offsetTop + 300;
  if (window.scrollY + window.innerHeight > offsetForChartToDisplay) {
    const myChart = new Chart(
      document.getElementById("myChart"),
      makeConfig(data, center)
    );
    window.removeEventListener("scroll", scrollOneChart);
  }
}

function scrollFourCharts() {
  const offsetForChartsToDisplay = fourCharts.offsetTop;
  if (window.scrollY + window.innerHeight > offsetForChartsToDisplay) {
    const myChart1 = new Chart(
      document.getElementById("myChart1"),
      makeConfig(data1, center1)
    );
    const myChart2 = new Chart(
      document.getElementById("myChart2"),
      makeConfig(data2, center2)
    );
    const myChart3 = new Chart(
      document.getElementById("myChart3"),
      makeConfig(data3, center3)
    );
    const myChart4 = new Chart(
      document.getElementById("myChart4"),
      makeConfig(data4, center4)
    );
    window.removeEventListener("scroll", scrollFourCharts);
  }
}

window.addEventListener("scroll", scrollOneChart);
window.addEventListener("scroll", scrollFourCharts);
