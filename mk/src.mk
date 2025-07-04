# .mk files
MK += Makefile
MK += $(wildcard   mk/*.mk)
MK += $(wildcard   hw/*.mk)
MK += $(wildcard  cpu/*.mk)
MK += $(wildcard arch/*.mk)
MK += $(wildcard   os/*.mk)

# JavaScript
J += $(wildcard src/*.js)
