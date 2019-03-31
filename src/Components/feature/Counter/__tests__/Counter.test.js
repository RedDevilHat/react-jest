import React from "react";

describe("Render Title component", () => {
    testRenderCounter();
    testValidCounter();
    testUnvalidCounter(undefined);
    testUnvalidCounter(null);
    testUnvalidCounter(NaN);
});

