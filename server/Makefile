# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
GOMOD=$(GOCMD) mod
BINARY_NAME=crazziocart
BINARY_UNIX=$(BINARY_NAME)_unix

# Build directory
BUILD_DIR=./bin

# Main package path
MAIN_PACKAGE_PATH=./cmd/api

# Linter
GOLINT=golangci-lint

all: test build

build:
	$(GOBUILD) -o $(BUILD_DIR)/$(BINARY_NAME) -v $(MAIN_PACKAGE_PATH)

test:
	$(GOTEST) -v ./...

clean:
	$(GOCLEAN)
	rm -f $(BUILD_DIR)/$(BINARY_NAME)
	rm -f $(BUILD_DIR)/$(BINARY_UNIX)

run:
	$(GOBUILD) -o $(BUILD_DIR)/$(BINARY_NAME) -v $(MAIN_PACKAGE_PATH)
	./$(BUILD_DIR)/$(BINARY_NAME)

deps:
	$(GOGET) ./...
	$(GOMOD) tidy

lint:
	$(GOLINT) run

# Cross compilation
build-linux:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 $(GOBUILD) -o $(BUILD_DIR)/$(BINARY_UNIX) -v $(MAIN_PACKAGE_PATH)

docker-build:
	docker build -t $(BINARY_NAME):latest .

.PHONY: all build test clean run deps lint build-linux docker-build