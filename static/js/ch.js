
      var g2 = new JustGage({
        id: 'g2',
        value: 70,
        min: 0,
        max: 200,
        symbol: 'bpm',
        pointer: true,
        valueFontColor:'#170e53',
        gaugeWidthScale: 0.5,
        pointerOptions: {
          toplength: 10,
          bottomlength: 10,
          bottomwidth: 8,
          color: '#170e53'
        },
        relativeGaugeSize: true,
        counter: true,
        donut: true
      });

      var g3 = new JustGage({
        id: 'g3',
        value: 0,
        min: 0,
        max: 100,
        symbol: '%',
        valueFontColor:'#170e53',
        pointer: true,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          color: '#170e53',
          stroke: '#170e53',
          stroke_width: 3,
          stroke_linecap: 'round'
        },
        relativeGaugeSize: true,
        gaugeWidthScale: 0.6,
        counter: true,
        donut: true
      });


      //setInterval(function() {
        
      //}, 5000); // update the charts every 5 seconds.
