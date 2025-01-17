import React, { useCallback,useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  BarController,
  LineController,
  LineElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarController,
  LineController,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,
  ChartDataLabels
);
import useCopyToClipboard from "../../utils/useCopyToClipboard";
const SexualOrientationChart = ({ chartData,getHrefImage, selectedDate}) => {
  const [value, copy] = useCopyToClipboard()
  const sexualOrientationCounts = {
    "Gay or lesbian": 0,
    "Straight or heterosexual": 0,
    "Bisexual": 0,
    "Queer": 0,
    "Questioning or not sure": 0,
    "Unknown": 0,
    "Decline to answer": 0,
  }
  
  const [stadistics, setStadistics] = useState([])
 useEffect(() => {
  stadistics = chartData?.map(event =>{
    sexualOrientationCounts["Gay or lesbian"] += event?.hivgayorlesbian 
    sexualOrientationCounts["Straight or heterosexual"] += event?.hivstraightorheterosexual 
    sexualOrientationCounts["Bisexual"] += event?.hivbisexual 
    sexualOrientationCounts["Queer"] += event?.hivqueer 
    sexualOrientationCounts["Questioning or not sure"] += event?.hivquestioningornotsure 
    sexualOrientationCounts["Unknown"] += event?.hivsexualorientationunknown 
    sexualOrientationCounts["Decline to answer"] += event?.hivsexualorientationdeclinedtoanswer
  })
  setStadistics(Object.values(sexualOrientationCounts))
 }, [chartData]);

 let values = stadistics.filter(value => Number.isFinite(value));
  let maxValue = Math.max.apply(null, values);
  const reversedDate  = {
    start: new Date(selectedDate.start).toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"}),
    finish: new Date(selectedDate.finish).toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"})
  }

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Sexual Orientation tested for HIV NYS CMP ${reversedDate?.start}-${reversedDate?.finish}`,
        position: "top",
        font: {
          size: 18,
        },
      },
      datalabels: {
        display: true,
        color: "#000",
        formatter: function (value, context) {
          return value > 0 ? value : "";
        },
        font: {
          weight: "bold",
        },
        anchor: "end",
        offset: -20,
        align: "start",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "# of people tested",
          font: {
            weight: "bold",
          },
        },
        ticks: {
          precision: 0,
        },
        min: 0,
        max: maxValue + (maxValue / 3),
      },
    },
  };

  const sexualOrientation = [
    "Gay or lesbian",
    "Straight or heterosexual",
    "Bisexual",
    "Queer",
    "Questioning or not sure",
    "Unknown",
    "Decline to answer",
  ];
  const data = {
    labels:  sexualOrientation,
    datasets: [
      {
        type: "bar",
        label: "# of people tested",
        backgroundColor: "#c42132",
        data: stadistics,
        borderColor: "white",
        borderWidth: 2,
      },
      
    ],
  };
  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };
  
  const chartRef = useRef();

  const exportChart = useCallback( () => {
    const name = "participantSexualOrientation";
    const href =  chartRef.current.toBase64Image();
    getHrefImage(href, name)
    // console.log(href)
  }, [])

  const imageToClipboard = async () => {
    const href = chartRef.current.toBase64Image();
    await fetch(href)
    .then(res => res.blob())
    .then(blob => copy(blob))
  }

  const onClick = (event) => {
    const { current } = chartRef;

    if (!current) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(current, event));
    printElementAtEvent(getElementAtEvent(current, event));
    printElementsAtEvent(getElementsAtEvent(current, event));
  };

  return (
    <div>
       {/*  <input type="radio" onChange={exportChart} /> */}

    <Chart
      type="bar"
      ref={chartRef}
      data={data}
      options={options}
      onClick={onClick}

    />
     <button
        onClick={imageToClipboard}
        className="px-5 my-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy to clipboard
      </button>
    </div>
    
  );
};

export default SexualOrientationChart;