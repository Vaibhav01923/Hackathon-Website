import React, { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { GoogleCredentialResponse } from "../types/auth";

const GoogleAuth: React.FC = () => {
  const { login } = useAuth();
  const googleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeGoogleAuth = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID || "demo-client-id",
          callback: (response: GoogleCredentialResponse) => {
            login(response.credential);
          },
        });

        if (googleButtonRef.current) {
          window.google.accounts.id.renderButton(googleButtonRef.current, {
            theme: "outline",
            size: "large",
            text: "signin_with",
            shape: "rectangular",
            logo_alignment: "left",
          });
        }
      }
    };

    if (window.google) {
      initializeGoogleAuth();
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          initializeGoogleAuth();
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [login]);

  return <div ref={googleButtonRef} className="w-full max-w-sm" />;
};

export default GoogleAuth;
