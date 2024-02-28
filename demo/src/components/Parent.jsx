import React, { useCallback, useState } from "react";

import AgeShower from "./AgeShower";
import Button from "./Button";

export function Parent() {
  const [saiAge, setSaiAge] = useState(10);
  const [arpanAge, setArpanAge] = useState(20);

  console.log("Parent Component");

  const incrementSai = useCallback(() => {
    console.log("Incrementing Sai age");
    setSaiAge((prev) => prev + 1);
  }, [arpanAge]);

  const incrementArpan = useCallback(() => {
    console.log("Incrementing Arpan age");
    setArpanAge((prev) => prev + 1);
  }, [saiAge]);

  //   Whenever my parent(this comp) re-renders, fn memory will be recreated

  return (
    <div>
      <div>
        <AgeShower name={"Sai"} age={saiAge} />
        <Button action={incrementSai} text={"Sai"} />
      </div>
      <div>
        <AgeShower name={"Arpan"} age={arpanAge} />
        <Button action={incrementArpan} text={"Arpan"} />
      </div>
    </div>
  );
}

// impure Component
