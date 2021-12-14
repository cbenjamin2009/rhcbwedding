import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";



const Countdown  = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();

  const [tickValue, setTickValue] = useState(value);

  // Make the Tick instance and store it in the refs
  useEffect(() => {
    const didInit = tick => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  // Start the Tick.down process
  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: ["M", "d", "h", "m", "s"]
    });

    // When the counter updates, update React's state value
    counter.onupdate = function(value) {
      setTickValue(value);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  // When the tickValue is updated, update the Tick.DOM element
  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
      <div className="tickParent">
          <span className="tickTitle">January 29th, 2022</span>
          <br/><span className="tickSubTitleRed">Updated </span><span className="tickSubtitle">Ceremony Begins: 11:00AM</span>
          <br/><span className="tickSubTitleWhite">Please arrive by 10:30am</span>
    <div ref={divRef} className="tick">
      <div className="tick-flip" data-repeat="true">
        <span className="tickFlip" data-view="flip"/>
 
      </div>
    </div>
    <div className="tickLabels">
    
    <span data-key="label" data-view="text" class="tick-label tick-text" data-value="Days">Months</span>
    <span data-key="label" data-view="text" class="tick-label tick-text" data-value="Days">Days</span>
    <span data-key="label" data-view="text" class="tick-label tick-text" data-value="Days">Hours</span>
    <span data-key="label" data-view="text" class="tick-label tick-text" data-value="Days">Min</span>
    <span data-key="label" data-view="text" class="tick-label tick-text" data-value="Days">Seconds</span>
    </div>
    </div>
  );
};


export default Countdown;