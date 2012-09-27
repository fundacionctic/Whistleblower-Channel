# -*- coding: UTF-8
#   tip
#   ***
#   :copyright: 2012 Hermes No Profit Association - GlobaLeaks Project
#   :author: Claudio Agosti <vecna@globaleaks.org>, Arturo Filastò <art@globaleaks.org>
#   :license: see LICENSE
#
#   Contains all the logic for handling tip related operations.

import datetime

class validatorRegExps:

    @classmethod
    def timecheckf(self, value):
        return True

    @classmethod
    def boolcheckf(self, value):
        if type(value) == type(True)
            return True
        else
            raise TypeError("Invalid bool element:", type(value))

    """
    regexp (\w+) with a size limit
    """
    @classmethod
    def stringcheckf(self, value):
        return True

    @classmethod
    def intcheckf(self, value):
        return True

    """
    Every ID has a different format, for be recognezed by
    human eye and easily to be parsed&generated:

    Tip: t_[\w+]32
    Receiver: r_[\w+]16
    Module: m_[\d+]9
    Context: c_[\d+]9

    Tip and Receiver are generated by random means, Module and 
    Context maybe incremental

    """
    @classmethod
    def tipIDcheckf(self, value):
        return True
    @classmethod
    def contextIDcheckf(self, value):
        return True
    @classmethod
    def moduleIDcheckf(self, value):
        return True
    @classmethod
    def receiverIDcheckf(self, value):
        return True

    """
    ("your"|"external"|"whistleblower")
    """
    @classmethod
    def commentENUMcheckf(self, value):
        return True

    """
    ("notification"|"delivery"|"inputfilter"|"dbstorage")
    """
    @classmethod
    def moduleENUMcheckf(self, value):
        return True

"""
default values, are used with a content that permit
no mistake, because need to be immediately understandable,
if some value is present without initialization/assignment.
Exception made for bool :(
"""
class defltvals:

    IDcounter = 0

    @classmethod
    def booldeflt(self):
        return False

    @classmethod
    def stringdeflt(self):
        return 'defaultWRONGstring'

    @classmethod
    def intdeflt(self):
        return 12345678

    @classmethod
    def moduleIDdeflt(self):
        print "ordo", type(self), dir(self)
        self.IDcounter += 1
        return 'm_00000' + str(self.IDcounter)

    @classmethod
    def contextIDdeflt(self):
        self.IDcounter += 1
        return 'c_11111' + str(self.IDcounter)

    @classmethod
    def tipIDdeflt(self):
        self.IDcounter += 1
        return 't_IP_unset_' + str(self.IDcounter)

    @classmethod
    def receiverIDdeflt(self):
        self.IDcounter += 1
        return 'r_ID_unset_' + str(self.IDcounter)

    @classmethod
    def commentENUMdeflt(self):
        return 'comment_ENUM_UNSET'

    @classmethod
    def moduleENUMdeflt(self):
        return 'module_ENUM_UNSET'

    @classmethod
    def timedeflt(self):
        return datetime.datetime.ctime(datetime.datetime.today())
        # yay, it's shit

