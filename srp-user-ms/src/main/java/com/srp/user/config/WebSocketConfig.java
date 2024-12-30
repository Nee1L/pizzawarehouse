package com.srp.user.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new CustomWebSocketHandler(), "/websocket-endpoint")
                .setAllowedOrigins("*");
    }

    private static class CustomWebSocketHandler extends TextWebSocketHandler {

        @Override
        public void afterConnectionEstablished(WebSocketSession session) throws Exception {
            System.out.println("WebSocket connection established");
        }

        @Override
        protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
            String incomingMessage = message.getPayload();
            System.out.println("Received message: " + incomingMessage);

            String response = "Server received: " + incomingMessage;
            session.sendMessage(new TextMessage(response));
        }

        @Override
        public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
            System.err.println("Error occurred: " + exception.getMessage());
        }

        @Override
        public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
            System.out.println("WebSocket connection closed");
        }
    }
}
