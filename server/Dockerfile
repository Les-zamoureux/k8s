# Étape 1 : build
FROM golang:1.24.3 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o app .

# Étape 2 : image finale
FROM debian:bookworm-slim

WORKDIR /app

COPY --from=builder /app/app .

EXPOSE 8080

CMD ["./app"]
