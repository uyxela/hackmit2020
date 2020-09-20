import React from "react";
import styled from "styled-components";

import large1 from "../assets/images/large1.svg";
import large2 from "../assets/images/large2.svg";
import large3 from "../assets/images/large3.svg";
import large4 from "../assets/images/large4.svg";
import large5 from "../assets/images/large5.svg";
import large6 from "../assets/images/large6.svg";

const LearnContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #83d86f;
    overflow: hidden;
`;

const PageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #83d86f;
    overflow: hidden;
`;

const LearnTitle = styled.h1`
    color: white;
    font-size: 5rem;
    font-weight: bold;
    margin: 50px;
`;

const LearnText = styled.p`
    color: white;
    font-size: 1-rem;
    font-weight: 
`;

const LearnImage = styled.img`
    width: 30%;
    min-width: 200px;
    margin: 50px;
`;

function Learn() {
    return (
        <>
            <LearnContainer>
                <LearnTitle>
                    What YOUR Data Means!
                </LearnTitle>
                <LearnImage src={large1} />
            </LearnContainer>
            <PageContainer>
                <LearnImage src={large2} style={{ width: "45%", minWidth: "300px" }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "40px" }}>
                    <LearnTitle>
                        CO2 & Friends?
                </LearnTitle>
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginRight: "40px", textAlign: "right" }}>At the very epicenter of our global climate crisis lies one of the most fundamental building blocks of our atmosphere: Carbon Dioxide (CO2). I hate to break it to you, but this is because of you.</LearnText>
                    <br />
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginRight: "40px", textAlign: "right" }}>But it's not just you! It's your neighbor, your friends, your co-workers, and in thsi ever-growing technological society, it's our computers, too.</LearnText>
                </div>
            </PageContainer>
            <LearnContainer>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "40px" }}>
                    <LearnTitle>
                        Computers, too?
                </LearnTitle>
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginLeft: "40px", textAlign: "left" }}>Yes! Laptops, desktops, tablets, ohones, and even smartwatches connected to the internet are responsible for CO2 emissions and all together account for levels that rival that of the airline industry. Every movie we stream, every email we send, and every question we Google is stored in hundreds of giant data centers -- factories of the modern digital era.</LearnText>
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginLeft: "40px", textAlign: "left" }}>Data centers consume over 2% of the world's electricity. What makes them potentially environmentally unfriendly is how they're run. Up to 50 percent of their total energy consumption goes to cooling the IT equipment. Depending on the energy mix, keeping up server demands may burn fossil fuels and have significant carbon impacts.</LearnText>
                </div>

                <LearnImage src={large3} style={{ width: "45%", minWidth: "500px" }} />
            </LearnContainer>
            <PageContainer>
                <LearnImage src={large4} style={{ width: "45%", minWidth: "500px" }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "40px" }}>
                    <LearnTitle>
                        To put into perspective,
                </LearnTitle>
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginRight: "40px", textAlign: "right" }}>Imagine an office setting where 100 computers are in use.
A standard computer consumes approximately 171 watts
of electricity, and nowadays, businesses usually leave
computers on permanently to download and install
updates, run antivirus scans, and perform security checks</LearnText>
                    <br />
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginRight: "40px", textAlign: "right" }}>So for 8,760 hours a year, the carbon footprint of 100
computers equates to roughly 69,205.8 kg CO2e per year!</LearnText>
<br />
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginRight: "40px", textAlign: "right" }}>To put that into perspective, the forests of the UK
absorb 5.4 tonnes of CO2 per hectare per year. With that said,
 we need to plant over 12 hectares of woodland a year...
The size of a small town!</LearnText>
                </div>
            </PageContainer>
            <LearnContainer>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "40px" }}>
                    <LearnTitle>
                        We can fix this, right?
                </LearnTitle>
                    <LearnText style={{ width: "60%", fontSize: "1.75rem", marginLeft: "40px", textAlign: "left" }}>Yes, but it’s not going to be easy! Google estimates that the
average search requires as much energy as illuminating a
60-watt light bulb for 17 seconds and emits 0.2 grams of CO2.
That’s the size of a rain drop, which isn’t a lot until you
realize there’s around 5.6 billion searches per day... 1.12
billion grams of CO2.</LearnText>
                </div>

                <LearnImage src={large5} style={{ width: "45%", minWidth: "500px" }} />
            </LearnContainer>
            <LearnContainer>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <LearnTitle>What can we do?</LearnTitle>
                    <LearnImage src={large6} style={{ width: "45%", minWidth: "500px" }} />
                    <LearnTitle>LEARN!</LearnTitle>
                </div>
            </LearnContainer>
        </>
        // <LearnContainer>
        //     <PageContainer>
        //         <LearnTitle>
        //             What YOUR Data Means!
        //         </LearnTitle>
        //         <LearnImage src={large1} />
        //     </PageContainer>
        //     <PageContainer>
        //         <LearnImage src={large2} />
        //         <LearnTitle>
        //             CO2 & Friends?
        //         </LearnTitle>
        //     </PageContainer>
        // </LearnContainer>
    )
}

export default Learn;