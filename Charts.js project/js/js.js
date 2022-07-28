let ctx = document.querySelector("canvas").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["red", "green", "blue", "yellow", "teal", "orange", "purple"],
    datasets: [
      {
        label: "My First Chart",
        data: [65, 59, 80, 81, 56, 55, 40],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(00, 120, 255, 0.2)",
          "rgba(255, 255, 0, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 80, 0, 0.2)",
          "rgba(201, 10, 201, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(0, 120, 255)",
          "rgb(255, 255, 0)",
          "rgb(54, 162, 235)",
          "rgb(255, 80, 0)",
          "rgb(201, 10, 201)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginZero: true,
      },
    },
  },
});
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [65, 59, 80, 81, 56, 55, 50, 82, 75, 70, 64, 47],
//       fill: false,
//       borderColor: "rgb(75, 192, 192)",
//       // backgroundColor: "#00c498",
//       tension: 0.1,
//     },
//   ],
// };
const data = {
  labels: labels,
  datasets: [
    {
      axis: "y",
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 58, 82, 75, 70, 64, 47],
      fill: true,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(54, 162, 235)",
        "rgb(255, 159, 64)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
      ],
      borderWidth: 1,
    },
  ],
};
// const config = {
//   type: "line",
//   data: data,
// };
const config = {
  type: "line",
  data: data,
  options: {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  },
};
let ctx2 = document.querySelectorAll("canvas")[1].getContext("2d");
const stackedLine = new Chart(ctx2, {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        stacked: true,
      },
    },
  },
});
let ctx3 = document.querySelectorAll("canvas")[2].getContext("2d");
const data2 = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(255, 205, 86, 0.5)",
        "rgba(255, 45, 255, 0.5)",
        "rgba(54, 162, 235, 0.5)",
      ],
    },
  ],
};
const config2 = {
  type: "polarArea",
  data: data2,
  options: {},
};
const myChart3 = new Chart(ctx3, {
  type: "polarArea",
  data: data2,
  options: {},
});
let ctx4 = document.querySelectorAll("canvas")[3].getContext("2d");
const data3 = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 78],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [88, 78, 23, 45, 87, 84, 94],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};
const myChart4 = new Chart(ctx4, {
  type: "radar",
  data: data3,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
let ctx5 = document.querySelectorAll("canvas")[4].getContext("2d");
const data4 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Try hiding me",
      data: [65, 59, 80, 81, 26, 75, 40],
      fill: true,
      backgroundColor: "rgb(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Try hiding me",
      data: [80, 55, 45, 92, 75, 29, 40],
      fill: true,
      backgroundColor: "rgb(255, 0, 100, 0.2)",
      borderColor: "rgb(255, 0, 100)",
    },
  ],
};
const myChart5 = new Chart(ctx5, {
  type: "line",
  data: data4,
  options: {
    tension: 0.4,
    transitions: {
      show: {
        animations: {
          x: {
            from: 1,
          },
          y: {
            from: 1,
          },
        },
      },
      hide: {
        animations: {
          x: {
            to: 0,
          },
          y: {
            to: 0,
          },
        },
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100,
      },
    },
  },
});
let ctx6 = document.querySelectorAll("canvas")[5].getContext("2d");
const data5 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Move", "Blu Sky"],
  datasets: [
    {
      label: "My First Dataset",
      data: [200, 50, 100, 45, 75, 64],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(0, 255, 175)",
        "rgb(255,97, 189)",
        "rgb(71,142,255)",
      ],
      hoverOffset: 4,
    },
    {
      label: "My Second Dataset",
      data: [152, 65, 78, 32, 45, 71],
      backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(0, 255, 175)",
        "rgb(71,142,255)",
        "rgb(255, 205, 86)",
        "rgb(255, 99, 132)",
        "rgb(255,97, 189)",
      ],
      hoverOffset: 4,
    },
    {
      label: "My Third Dataset",
      data: [100, 178, 56, 23, 152, 40],
      backgroundColor: [
        "rgb(255,97, 189)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(0, 255, 175)",
        "rgb(71,142,255)",
        "rgb(255, 99, 132)",
      ],
      hoverOffset: 4,
    },
    {
      label: "My Four Dataset",
      data: [123, 56, 89, 41, 78, 98],
      backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(255,97, 189)",
        "rgb(0, 255, 175)",
        "rgb(71,142,255)",
        "rgb(255, 205, 86)",
        "rgb(255, 99, 132)",
      ],
      hoverOffset: 4,
    },
    {
      label: "My Five Dataset",
      data: [85, 72, 84, 64, 21, 82],
      backgroundColor: [
        "rgb(255,97, 189)",
        "rgb(54, 162, 235)",
        "rgb(71,142,255)",
        "rgb(0, 255, 175)",
        "rgb(255, 205, 86)",
        "rgb(255, 99, 132)",
      ],
      hoverOffset: 4,
    },
  ],
};
const myChart6 = new Chart(ctx6, {
  type: "pie",
  data: data5,
});
let ctx7 = document.querySelectorAll("canvas")[6].getContext("2d");
const myChart7 = new Chart(ctx7, {
  data: {
    datasets: [
      {
        fill: {
          target: "origin",
          above: "rgb(255, 0, 0)", // Area will be red above the origin
          below: "rgb(0, 0, 255)", // And blue below the origin
        },
      },
    ],
  },
});
