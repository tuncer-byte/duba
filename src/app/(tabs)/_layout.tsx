import { Tabs } from 'expo-router';
import React from 'react';
import { Icon, type IconName } from '@/components/Icon';
import { colors, fonts } from '@/theme';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tab = (title: string, icon: IconName) => ({
  title,
  tabBarIcon: ({ color }: { color: unknown }) => <Icon name={icon} size={26} color={String(color)} />,
});

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const bottom = Math.max(insets.bottom, Platform.OS === 'web' ? 8 : 6);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mute,
        tabBarLabelStyle: { fontFamily: fonts.bodySemi, fontSize: 11, marginTop: 2 },
        tabBarStyle: { backgroundColor: '#fff', borderTopColor: colors.border, height: 64 + bottom, paddingTop: 8, paddingBottom: bottom },
        sceneStyle: { backgroundColor: colors.bg },
      }}
    >
      <Tabs.Screen name="index" options={tab('Ana Sayfa', 'home')} />
      <Tabs.Screen name="sinavlar" options={tab('Sınavlar', 'doc')} />
      <Tabs.Screen name="konular" options={tab('Konular', 'book')} />
      <Tabs.Screen name="ilerleme" options={tab('İlerleme', 'chart')} />
    </Tabs>
  );
}
