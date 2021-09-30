## Table of contents

- [Introduction](#introduction)
- [Inputs](#inputs)
- [Outputs](#outputs)
- [Usage](#usage)

## Introduction

This action lets you update a page property from the Notion API.

## Inputs

| input            | description                  | required |
| ---------------- | ---------------------------- | -------- |
| `notion_api_key` | Notion API Key               | `true`   |
| `page_id`        | Identifier for a Notion page | `true`   |
| `key`            | Key of the property          | `true`   |
| `value`          | Value for the property       | `true`   |

## Outputs

| output     | type         |
| ---------- | ------------ |
| `response` | JSON encoded |

## Usage

```yml
name: Update page status
on:
  pull_request:
    types: [closed]
jobs:
  notion:
    runs-on: ubuntu-latest
    steps:
      - name: Update page details
        uses: dovetail/notion-update-page-property@latest
        with:
          notion_api_key: secret_1234567890abcdef1234
          page_id: 1234567890abcdef1234567890abcdef
          key: 'Status'
          value: '{ "select": { "name" : "Done" } }'
```
