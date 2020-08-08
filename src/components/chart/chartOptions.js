export const getBarChartOptions = currency => {
  return {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            drawBorder: false,
            color: 'rgb(241, 244, 251)',
          },
        },
      ],
    },
    tooltips: {
      displayColors: false,
      titleFontSize: 11,
      bodyFontSize: 10,
      xPadding: 10,
      yPadding: 10,
      callbacks: {
        label: (tooltipItem, data) => {
          return `${currency}  ${tooltipItem.value}`;
        },
      },
    },
    plugins: {
      datalabels: {
        color: '#333',
        align: 'top',
        anchor: 'end',
        formatter: data => {
          return `${currency} ${data}`;
        },
        font: {
          weight: 'normal',
          size: 10,
        },
      },
    },
    layout: {
      padding: {
        top: 30,
      },
    },
  };
};

export const getHorizontalBarChartOptions = (currency, max) => {
  return {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
            min: 0,
            max: max,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },

    tooltips: {
      displayColors: false,
      titleFontSize: 11,
      bodyFontSize: 10,
      callbacks: {
        label: (tooltipItem, data) => {
          return `${currency}  ${tooltipItem.value}`;
        },
      },
    },

    plugins: {
      datalabels: {
        labels: {
          value: {
            color: '#333',
            align: 'end',
            anchor: 'end',
            font: {
              size: '10',
              weight: 'normal',
            },
            padding: {
              bottom: 10,
            },

            formatter: function (value, context) {
              return `${currency} ${value}`;
            },
          },
        },
      },
    },
    layout: {
      padding: {
        right: 46,
      },
    },
  };
};

export const pieChartOptions = {
  mainPieSize: 1,
  plugins: {
    datalabels: {
      color: '#333',
      align: 'end',
      anchor: 'end',
      formatter: data => {
        return `${data} %`;
      },
      font: {
        weight: 'normal',
        size: 10,
      },
    },
  },
  layout: {
    padding: {
      bottom: 30,
    },
  },
  legend: {
    // fullWidth: false,
    labels: {
      fontSize: 12,
      padding: 6,
      // usePointStyle: true,
    },
  },
};
