---
title: MmTokm (Function)
---

This converts the input given in megameters into kilometers.

Syntax

    <DOUBLE> unitconversion:MmTokm(<INT|LONG|FLOAT|DOUBLE> p1)

## Query Parameters

| Name | Description                                                           | Default Value | Possible Data Types   | Optional | Dynamic |
|------|-----------------------------------------------------------------------|---------------|-----------------------|----------|---------|
| p1   | The value that needs to be converted from megameters into kilometers. |               | INT LONG FLOAT DOUBLE | No       | Yes     |

## Example 1

    unitconversion:MmTokm(1)

The megameter value `1` is converted into kilometers as `1000.0`.
