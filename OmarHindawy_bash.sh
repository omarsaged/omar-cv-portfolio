#!/bin/bash

file="cv-omar.html"

echo "Number of div tags:"
grep -o "<div" $file | wc -l

echo "Number of img tags:"
grep -o "<img" $file | wc -l

echo "Number of links:"
grep -o "<a" $file | wc -l

echo "Number of heading tags:"
grep -o "<h[1-6]" $file | wc -l