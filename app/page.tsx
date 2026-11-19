
"use client";

import { useState } from "react";
import { Send, Plus, Mic, Sparkles } from "lucide-react";

export default function EagleAI() {
  const [message, setMessage] = useState("");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#050B16",
      color: "white",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px"
    }}>
      <header style={{
        width: "100%",
        maxWidth: "850px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{color:"#65CFFF"}}>🦅 EAGLE AI</h2>
        <span style={{color:"#8BA9C5"}}>GENESIS 1.0</span>
      </header>

      <section style={{
        margin: "auto",
        width: "100%",
        maxWidth: "760px",
        textAlign: "center"
      }}>
        <div style={{
          fontSize: "76px",
          filter: "drop-shadow(0 0 25px #168DFF)"
        }}>🦅</div>

        <h1 style={{
          fontSize: "clamp(32px, 7vw, 55px)",
          background: "linear-gradient(90deg,#FFFFFF,#42BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          EAGLE AI
        </h1>

        <h3 style={{color:"#A9C8E8"}}>
          Intelligence Without Limits
        </h3>

        <p style={{color:"#829CB7",lineHeight:1.8}}>
          નમસ્તે! હું Eagle છું.
          પૂછો, શોધો, શીખો અને નવી શક્યતાઓ શોધો.
        </p>

        <div style={{
          display:"flex",
          gap:"10px",
          marginTop:"35px",
          padding:"12px",
          border:"1px solid #24547B",
          borderRadius:"18px",
          background:"#101C2C"
        }}>
          <button style={{
            background:"transparent",
            border:0,
            color:"#75CFFF"
          }}>
            <Plus/>
          </button>

          <input
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Ask Eagle anything..."
            style={{
              flex:1,
              minWidth:0,
              background:"transparent",
              border:0,
              outline:"none",
              color:"white",
              fontSize:"16px"
            }}
          />

          <button style={{
            background:"transparent",
            border:0,
            color:"#75CFFF"
          }}>
            <Mic/>
          </button>

          <button
            onClick={()=>setMessage("")}
            style={{
              background:"#087DC7",
              border:0,
              color:"white",
              borderRadius:"12px",
              padding:"12px"
            }}>
            <Send/>
          </button>
        </div>

        <div style={{
          display:"flex",
          justifyContent:"center",
          gap:"12px",
          flexWrap:"wrap",
          marginTop:"25px"
        }}>
          {["General AI","Legal AI","Research","Coding"].map(item=>(
            <span key={item} style={{
              border:"1px solid #234566",
              padding:"10px 16px",
              borderRadius:"30px",
              color:"#A8D9FF",
              fontSize:"13px"
            }}>
              <Sparkles size={12} style={{
                display:"inline",
                marginRight:"6px"
              }}/>
              {item}
            </span>
          ))}
        </div>
      </section>

      <footer style={{
        color:"#58738D",
        fontSize:"12px",
        padding:"20px"
      }}>
        EAGLE AI © 2026 | KNOWLEDGE WITHOUT LIMITS
      </footer>
    </main>
  );
}
