import CardHeader from "@/components/CardComponent/CardHeader";
import HomeHeader from "@/components/HomeComponents/HomeHeader";
import ProfileHeader from "@/components/ProfileComponent/ProfileHeader";
import SupportHeader from "@/components/SupportComponents/SupportHeader";
import { Tabs, usePathname } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Platform, StatusBar } from "react-native";

export default function Tablayout() {
  const pathname = usePathname();
  const [statusBarConfig, setStatusBarConfig] = useState({
    barStyle: 'dark-content' as 'dark-content' | 'light-content',
    backgroundColor: '#fff'
  });

  useEffect(() => {
    if (pathname.includes('/support') || pathname.includes('/profile')) {
      setStatusBarConfig({
        barStyle: 'light-content',
        backgroundColor: '#1A35BD' 
      });
    } else {
      setStatusBarConfig({
        barStyle: 'dark-content',
        backgroundColor: 'black'
      });
    }
  }, [pathname]);

  return (
    <>
      <StatusBar 
        barStyle={statusBarConfig.barStyle} 
        backgroundColor={statusBarConfig.backgroundColor}
       
      />
      
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#1A35BD", 
          tabBarInactiveTintColor: "#9A9A9A", 
        

          tabBarStyle: {
            backgroundColor: "#E8EBF8",
            borderTopWidth: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopColor: "#E5E7EB",
            height: Platform.OS === 'ios' ? 80 : 60,
            paddingTop: Platform.OS === 'ios' ? 5 : 3,
            paddingBottom: 5
          },

          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center'
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "interregular",
            fontWeight: "400"
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: true,
            header: () => <HomeHeader />,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/homeActiveIcon.png")
                    : require("../../assets/images/homeInActiveIcon.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="card"
          options={{
            title: "Card",
            headerShown: true,
            header: () => <CardHeader />,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/cardaActiveIcon.png")
                    : require("../../assets/images/cardInActiveIcon.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="support"
          options={{
            title: "Support",
            headerShown: true,
            header: () => <SupportHeader />,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/supportActiveIcon.png")
                    : require("../../assets/images/supportInActiveIcon.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: true,
            header: () => <ProfileHeader />,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/profileActiveIcon.png")
                    : require("../../assets/images/profileInactiveIcon.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}