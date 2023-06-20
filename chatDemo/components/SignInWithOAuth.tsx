import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, StyleSheet} from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { SafeAreaView } from "react-native-safe-area-context";
WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <SafeAreaView>
    <Button
      title="Sign in with Google"
      onPress={onPress}
      style={styles.button}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: { 
    padding: 16
  }
});

export default SignInWithOAuth;
