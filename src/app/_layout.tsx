import { AlbertSans_400Regular, AlbertSans_500Medium, AlbertSans_600SemiBold, AlbertSans_700Bold } from '@expo-google-fonts/albert-sans';
import { PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold, PlusJakartaSans_800ExtraBold, useFonts } from '@expo-google-fonts/plus-jakarta-sans';
import * as SplashScreen from 'expo-splash-screen';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AnimatedSplash, SPLASH_GREEN } from '@/components/AnimatedSplash';
import { checkPremium, initPurchases } from '@/lib/purchases';
import { initUpdates } from '@/lib/updates';
import { AppProvider, useApp } from '@/store/app';
import { colors } from '@/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});

/** Açılışta RevenueCat'i başlatır ve mağazadaki premium durumunu yerel kayıtla eşler. */
function PurchaseSync() {
  const { ready, setPremium } = useApp();
  useEffect(() => {
    if (!ready) return;
    (async () => {
      await initPurchases();
      const p = await checkPremium();
      if (p === true) setPremium(true);
    })();
  }, [ready, setPremium]);
  return null;
}

function Gate({ children }: { children: React.ReactNode }) {
  const { ready, profile } = useApp();
  const router = useRouter();
  const segments = useSegments();
  const onWelcome = segments[0] === 'hosgeldin';
  useEffect(() => {
    if (!ready) return;
    if (!profile.name && !onWelcome) router.replace('/hosgeldin');
    if (profile.name && onWelcome) router.replace('/');
  }, [ready, profile.name, onWelcome, router]);
  return <>{children}</>;
}

export function ErrorBoundary({ error, retry }: { error: Error; retry: () => void }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center', padding: 28, gap: 14 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: colors.ink }}>Bir şeyler ters gitti</Text>
      <Text style={{ fontSize: 16, color: colors.ink2, textAlign: 'center' }}>Uygulamada beklenmeyen bir hata oluştu. Verilerin cihazında güvende. Tekrar deneyebilirsin.</Text>
      {__DEV__ && <Text style={{ fontSize: 12, color: colors.mute }}>{error.message}</Text>}
      <Pressable onPress={retry} style={{ backgroundColor: colors.primary, borderRadius: 16, paddingHorizontal: 28, paddingVertical: 14 }}>
        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700' }}>Tekrar dene</Text>
      </Pressable>
    </View>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold, PlusJakartaSans_800ExtraBold,
    AlbertSans_400Regular, AlbertSans_500Medium, AlbertSans_600SemiBold, AlbertSans_700Bold,
  });
  const [splash, setSplash] = React.useState(true);
  useEffect(() => { if (loaded) SplashScreen.hideAsync().catch(() => {}); }, [loaded]);
  useEffect(() => { initUpdates().catch(() => {}); }, []);
  if (!loaded) return <View style={{ flex: 1, backgroundColor: SPLASH_GREEN }} />;
  return (
    <SafeAreaProvider>
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: Platform.OS === 'web' ? '#E9EFEE' : colors.bg, alignItems: 'center' }}>
          <View style={{ flex: 1, width: '100%', maxWidth: 480, backgroundColor: colors.bg }}>
            <StatusBar style="dark" />
            <PurchaseSync />
            <Gate>
              <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.bg }, animation: 'slide_from_right' }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="hosgeldin" options={{ animation: 'fade' }} />
                <Stack.Screen name="sinav/[id]" options={{ gestureEnabled: false, animation: 'slide_from_bottom' }} />
                <Stack.Screen name="sonuc/[id]" options={{ gestureEnabled: false }} />
                <Stack.Screen name="premium" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
              </Stack>
            </Gate>
            {splash && <AnimatedSplash onDone={() => setSplash(false)} />}
          </View>
        </View>
      </AppProvider>
    </SafeAreaProvider>
  );
}
