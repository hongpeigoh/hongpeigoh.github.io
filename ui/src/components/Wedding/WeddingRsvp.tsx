import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CryptoJS from "crypto-js";

const hashCode = async (input: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = new Uint8Array(hashBuffer);

  let hexString = "";
  for (let i = 0; i < hashArray.length; i++) {
    hexString += hashArray[i].toString(16).padStart(2, "0");
  }

  return hexString;
};

const decryptUrl = (encrypted: string, key: string): string | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return null;
  }
};

const iframeMap: Record<string, string> = {
  "090b235e9eb8f197f2dd927937222c570396d971222d9009a9189e2b6cc0a2c1":
    "U2FsdGVkX18bnCZn5T6vkE0fMr8q60DWwoCB2/F503HHExikF4vDFATlwz6+Og0tCGKyVJ0YSQMZfFLRHyyGr2hiUYVdjUv4Urr0Usypjxc=",
  "1dfe8a8e0cb2d1da6c0a7a00c01e84e72c60b29d19565877b39512f54f551750":
    "U2FsdGVkX1/weoZsCNts6czJeBu7z3oDNVov79X99pa9KylJmFN+MI1e4SjWKgryd0jtVEXLVglAz9O8yt/xmhWDUg5l73gxNf20KwdmAyI=",
  "2fb437ad7cb1c107a57347a17a83719dae1a65e41b3be23d92b9f11e3fdc6a02":
    "U2FsdGVkX1+Kv0Sk4zBAuU2JY1twIpnkEmCuj9nFtVzji7LA/x8SrlGNy6iNSN7b1+GQvB4mVvZuuQEigvvF8fxTUXbiVWz7ExqfPMZ/nIY=",
};

export const WeddingRsvp = () => {
  const [code, setCode] = useState("");
  const [iframeUrl, setIframeUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setIframeUrl(undefined);

    const hash = await hashCode(code.trim());
    const url = decryptUrl(iframeMap[hash], "rsvp");

    if (url) {
      setIframeUrl(url);
    } else {
      setError("Invalid code.");
    }
  };

  return (
    <Box height={"calc(100svh - 60px)"} margin={0}>
      {iframeUrl === undefined && (
        <Container sx={{ my: 12 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter RSVP Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              size="small"
            />
            <Button type="submit" variant="contained" sx={{ mx: 2 }}>
              Submit
            </Button>
          </form>
        </Container>
      )}

      {error && <Typography color="error">{error}</Typography>}

      {iframeUrl && (
        <iframe
          title="rsvp-form"
          src={`https://docs.google.com/forms/d/e/${iframeUrl}/viewform?embedded=true`}
          style={{
            width: "100%",
            height: "100%",
            border: 0,
          }}
        >
          Loading Form...
        </iframe>
      )}
    </Box>
  );
};
